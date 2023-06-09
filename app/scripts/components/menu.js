/**
 * This file will hold the Menu that lives at the top of the Page, this is all rendered using a React Component...
 * 
 */
import React from 'react';
import { search } from '../services/search';
import { debounce } from '../helpers/debounce';
import Search from './search';

class Menu extends React.Component {

  /**
   * Main constructor for the Menu Class
   * @memberof Menu
   */
  constructor() {
    super();
    this.state = {
      search: [],
      open: false,
    };
    this.onSearch = debounce(this.onSearch.bind(this), 500);
  }

  /**
   * Shows or hides the search container
   * @memberof Menu
   * @param e [Object] - the event from a click handler
   */
  toggleSearch(e) {
    e.preventDefault();
    this.setState({
      search: [],
      open: !this.state.open,
    });
  }

  /**
   * Calls upon search change
   * @memberof Menu
   * @param e [Object] - the event from a text change handler
   */
  async onSearch(e) {
    const data = await search(e.target.value);
    this.setState({ search: data });
  }

  /**
   * Renders the default app in the window, we have assigned this to an element called root.
   * 
   * @returns JSX
   * @memberof App
  */
  render() {
    return (
      <header className="menu">
        <div className="menu-container">
          <div className="menu-holder">
            <h1>ELC</h1>
            <nav>
              <a href="#" className="nav-item">HOLIDAY</a>
              <a href="#" className="nav-item">WHAT'S NEW</a>
              <a href="#" className="nav-item">PRODUCTS</a>
              <a href="#" className="nav-item">BESTSELLERS</a>
              <a href="#" className="nav-item">GOODBYES</a>
              <a href="#" className="nav-item">STORES</a>
              <a href="#" className="nav-item">INSPIRATION</a>

              <a href="#" onClick={(e) => this.toggleSearch(e)}>
                <i className="material-icons search">search</i>
              </a>
            </nav>
          </div>
        </div>
        <div className={(this.state.open ? "showing " : "") + "search-container"}>
          <input type="text" onChange={(e) => this.onSearch(e)} />
          <a href="#" onClick={(e) => this.toggleSearch(e)}>
            <i className="material-icons close">close</i>
          </a>
          <Search results={this.state.search} />
        </div>
      </header>
    );
  }


}

// Export out the React Component
export default Menu;