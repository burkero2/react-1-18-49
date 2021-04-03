import React, { Component } from 'react'
import Loader from './Loader'
import {gopherCards} from '../gophers'

export class SearchBar extends Component {
    constructor(props) {
    super(props)
    this.state = {
        gophers: gopherCards,
        isLoaded: false,
    }
}

componentDidMount(){
        console.log("Component Did Mount");
        setTimeout(() => {
            console.log("Component Did Mount again");
            this.setState({
                isLoaded: true,
            })
        }, 2000);
    }


handleChange = (event) => {
        const name = event.target.value
        console.log(name);
        const filteredGophers = gopherCards.filter(card => {
            return card.name.toLowerCase().includes(name)
        })
        this.setState({
            gophers: filteredGophers,
            
        })
    }

    render() {
        return (
            <div>
                <h1>Gopher Search</h1>
                    <form>
                        <input
                            onChange={(e) => this.handleChange(e)}
                            type="text"
                        />
                    </form>
                {
                    this.state.isLoaded ? (
                        <table style={{margin: '20px auto'}}>
                            <thead>
                                <tr>
                                    <th>name</th>
                                    <th>email</th>
                                    <th>website</th>
                                    <th>image</th>
                                </tr>
                            </thead>
                                <tbody>
                                    {
                                        this.state.gophers.map(item => {
                                            
                                            return (
                                                <tr key = {item.name}>
                                                    <td>{item.name}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.website}</td>
                                                    <td><img src = {item.image} alt = {item.name}/></td>
                                                </tr>
                                            )
                                        })
                                    }
                                    
                                </tbody>
                            </table>     
                    ):(
                        <Loader />
                    )
                }
            </div>
        )
    }
}

export default SearchBar

