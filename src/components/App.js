import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div>
                {/* <h1>タグを用いて、「Hello World」と表示してください */}
                <h1>Hello World</h1>
                
                {/* <p>タグを用いて、「一緒にReactを学びましょう！」と表示してください */}
                <p>一緒にReactを学びましょう！</p>

                {/* <img>タグを用いて、画像を表示してください */}
                <img src="./src/img/ninjawanko.png"/>
                
            </div>
        );
    }
}

export default App;