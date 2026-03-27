import TabBar from './components/TabBar.js';
import Content from './components/Content.js';
import { request } from './components/api.js';

export default function App($app) {
    this.state = {
        currentTab: 'all',
        photos: [],
    };
    const tabBar = new TabBar({
        $app,
        initalState: '',
        onClick: async (name) => {
            this.setState({
                ...this.state,
                currentTab: name,
                photos: await request(name === 'all' ? '' : name),
            });
        },
    });
    const content = new Content({
        $app,
        intialState: [],
    });

    this.setState = (newState) => {
        this.state = newState;
        tabBar.setState(this.state.currentTab);
        content.setState(this.state.photos);
    };

    const init = async () => {
        try {
            const initalPhotos = await request();
            this.setState({ ...this.state, photos: initalPhotos });
        } catch (e) {
            console.log(e);
        }
    };
    init();
}
