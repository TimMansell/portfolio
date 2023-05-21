import { vi } from 'vitest';
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

const matchMediaMock = vi.fn(() => ({
  addListener: vi.fn(),
  removeListener: vi.fn(),
  matches: false,
}));

const IntersectionObserverMock = vi.fn(() => ({
  disconnect: vi.fn(),
  observe: vi.fn(),
  takeRecords: vi.fn(),
  unobserve: vi.fn(),
}));

const RequestAnimationMock = vi.fn(() => ({
  requestAnimationFrame: vi.fn(),
  cancelAnimationFrame: vi.fn(),
}));

vi.stubGlobal('matchMedia', matchMediaMock);
vi.stubGlobal('IntersectionObserver', IntersectionObserverMock);
vi.stubGlobal('RequestAnimation', RequestAnimationMock);
