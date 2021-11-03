import React, { Component } from 'react'
import ReactDOM from "react-dom";
import ReactTags from "react-tag-autocomplete";

 class Tag extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          tags: [{ id: 1, name: "Apples" }, { id: 2, name: "Pears" }],
          suggestions: [
            { id: 3, name: "Bananas" },
            { id: 4, name: "Mangos" },
            { id: 5, name: "Lemons" },
            { id: 6, name: "Apricots" }
          ]
        };
    
        this.selectTag = this.selectTag.bind(this);
        this.addTag = this.addTag.bind(this);
        this.clearTag = this.clearTag.bind(this);
      }
    
      handleDelete(i) {
        const tags = this.state.tags.slice(0);
        tags.splice(i, 1);
        this.setState({ tags });
      }
    
      handleAddition(tag) {
        const tags = [].concat(this.state.tags, tag);
        this.setState({ tags });
      }
    
      selectTag(e) {
        this.setState({ selected: parseInt(e.target.value, 0) });
      }
    
      addTag() {
        const tag = this.state.suggestions.find(
          value => value.id === this.state.selected
        );
    
        if (tag) {
          this.handleAddition(tag);
          this.setState({ selected: "" });
        }
      }
    
      clearTag() {
        this.setState({ tags: [] });
      }
    
    render() {
        return (
            <div style={{marginLeft:"44rem"}}>
            <ReactTags
              tags={this.state.tags}
              suggestions={this.state.suggestions}
              handleDelete={this.handleDelete.bind(this)}
              handleAddition={this.handleAddition.bind(this)}
            />
            <div class="controls">
              <select
                name="suggestions"
                onChange={this.selectTag.bind(this)}
                value={this.state.selected}
              >
                <option value="" />
                {this.state.suggestions.map(suggestion => {
                  return <option value={suggestion.id}>{suggestion.name}</option>;
                })}
              </select>
              <button type="button" onClick={this.addTag}>
                Add tag
              </button>
              <button type="button" onClick={this.clearTag}>
                Clear tags
              </button>
            </div>
          </div>
        )
    }
}

export default Tag
