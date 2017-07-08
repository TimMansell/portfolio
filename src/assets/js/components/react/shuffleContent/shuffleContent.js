import React from 'react';
// import ReactDOM from 'react-dom';

import {ShuffleCharacters} from '../shuffleCharacters/shuffleCharacters';

export class ShuffleContent extends React.Component {
    
    
    // let $elements = angular.element(element).children(),
    //     elementsArray = Array.prototype.slice.apply($elements),
    //     containerHeight = angular.element(elementsArray[0]).height();

    // // console.log('el', angular.element(elementsArray[0])[0]);

    // // // Set height of container.
    // element.height(containerHeight).css({display:'block'});

    // shuffle();

    // $interval(shuffle, 4000);

    // // Shuffle text.
    // function shuffle(){
    //   $elements.addClass('hidden-xs-up');

    //   angular.element(elementsArray[0]).removeClass('hidden-xs-up');

    //   shuffleLetters(angular.element(elementsArray[0])[0]);

    //   elementsArray.push(elementsArray.shift());
    // }

    render() {
        return <div>
            <ShuffleCharacters>{this.props.children}</ShuffleCharacters>
        </div>;
    }
}