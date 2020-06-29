const fetch = require('node-fetch');
require('dotenv').config();

const DAILY_COFFEES = 4;
const ACCESS_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_RESULTS_API_LIMIT = 100;
const query = `
  query {
    repository(owner:"timmansell", name:"portfolio") {
     pullRequests {
       totalCount
     }
     ref(qualifiedName: "master") {
        target {
          ... on Commit {
            history {
              totalCount
              nodes {
                committedDate
              }
            }
          }
        }
      }
    }
  }`;

const github = () =>
  new Promise((resolve, reject) => {
    fetch('https://api.github.com/graphql', {
      method: 'POST',
      body: JSON.stringify({ query }),
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    })
      .then((res) => res.text())
      .then((body) => resolve(formatAPIOutput(body)))
      .catch(() => reject('Failed to fetch github stats'));
  });

const formatAPIOutput = (body) => {
  const { data } = JSON.parse(body);
  const { pullRequests, ref } = data.repository;
  const { history } = ref.target;
  const { totalCount, nodes } = history;
  const coffees = calculateTotalCoffees(nodes, totalCount);

  return {
    pullRequests: pullRequests.totalCount,
    commits: totalCount,
    coffees,
  };
};

const getDate = (node) => node.committedDate.slice(0, 10);

const calculateTotalCoffees = (nodes, totalCommits) =>
  Math.round(
    [...new Set(nodes.map(getDate))].length *
      DAILY_COFFEES *
      (totalCommits / GITHUB_RESULTS_API_LIMIT)
  );

module.exports = github;
