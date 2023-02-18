import withMessage from './withMessage';

export default () => {
    global.expect = withMessage(global.expect);
}

export { withMessage };
