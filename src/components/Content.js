export default function Content({ $app, intialState }) {
    this.state = intialState;
    this.$target = document.createElement('div');
    this.$target.className = 'content';
    $app.appendChild(this.$target);

    this.template = () => {
        let temp = '';
        if (this.state) {
            this.state.forEach((elm) => {
                temp += `<img src="${elm.url}" alt="animal"/>`;
            });
        }
        return temp;
    };

    this.render = () => {
        this.$target.innerHTML = this.template();
    };
    this.setState = (newState) => {
        this.state = newState;
        this.render();
    };

    this.render();
}
