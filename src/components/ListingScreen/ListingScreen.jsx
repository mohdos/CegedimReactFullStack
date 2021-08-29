

import { render } from '@testing-library/react';
import { Component, useEffect, useState } from 'react';
import ListingCard from './ListingCard';
import './ListingScreen.css';



class ListingScreen extends Component {

    constructor(props) {
        super(props);

        this.LIMIT_PER_REQUEST = 5;
        this.state = {
            items: [],
            isLoading: false,
            isDone: false
        }

        this.fetchData = this.fetchData.bind(this);
    }

    onScroll = e => {
        console.log(window.innerHeight + window.scrollY, document.body.offsetHeight);
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            // you're at the bottom of the page
            this.fetchData();
        }
    }

    componentDidMount() {
        this.fetchData();
        window.addEventListener("scroll", this.onScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.onScroll);
    }

    fetchData() {
        if (this.state.isLoading || this.state.isDone) {
            console.log(this.state.isLoading, this.state.isDone);
            return;
        }
        let url = new URL("http://localhost:8080/api/items/");
        var params = {
            offset: this.state.items.length,
            limit: this.LIMIT_PER_REQUEST
        };
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

        this.setState({ isLoading: true });
        fetch(url, { cache: "no-cache", credentials: 'same-origin' })
            .then(result => {
                return result.json()
            }).then(data => {
                console.log("data ", data);
                // const resultItems = data.map((value) => value.name);
                console.log("length: ", data.length, url);
                if (data.length == 0) {
                    // setIsDone(true);
                    this.setState({ isDone: true });
                }
                else {
                    // setIsDone(false);
                    this.setState({ isDone: false });
                }
                this.setState({ items: [...this.state.items, ...data] });
                this.setState({ isLoading: false });
            });
    }

    render() {
        return (
            <div className="listings-container">
                {this.state.items.map((value) => <ListingCard key={value.id} value={value.name} />)}
                {this.state.isDone && <ListingCard isDone={true} key={"isDone"} value={"The complete list has been loaded. No more to load"} />}
            </div>
        );
    }
}


// function ListingScreen(props)
// {


//     const LIMIT_PER_REQUEST = 5;

//     const [items, setItems] = useState([]);
//     const [isLoading, setIsLoading] = useState(false);
//     const [isDone, setIsDone] = useState(false);
//     const [scrollPos, setScrollPos] = useState(0);




//     useEffect(() => {
//         const onScroll = e => {
//             // const currentPos = window.pageYOffset;
//             // console.log("Difference ", document.body.scrollHeight, currentPos);
//             // if (document.body.scrollHeight == currentPos)
//             // {
//             //     fetchData();
//             // }

//             setScrollPos(window.scrollY);
//             console.log(window.innerHeight + window.scrollY, document.body.offsetHeight);
//             if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
//                 // you're at the bottom of the page
//                 console.log("New fetch")
//                 fetchData();
//             }
//         }

//         const onLoad = e => {
//             fetchData();
//         };

//         window.addEventListener("scroll", onScroll);

//         // window.addEventListener("load", onLoad);
//         fetchData();
//         return () => {
//             window.removeEventListener("scroll", onScroll);
//             // window.removeEventListener("load", onLoad);
//         };



//     }, [scrollPos]);

//     return (
//         <div className="listings-container">
//             {items.map((value) => <ListingCard key={value.id} value={value.name}/>)}
//         </div>
//     );
// }


export default ListingScreen;




