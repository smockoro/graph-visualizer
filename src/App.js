import React, { Component } from 'react';
import Graph from 'react-graph-vis';
import vis from 'vis';

const graph = {
  nodes: [
      {id: 1, label: 'Node 1'},
      {id: 2, label: 'Node 2'},
      {id: 3, label: 'Node 3'},
      {id: 4, label: 'Node 4'},
      {id: 5, label: 'Node 5'}
    ],
  edges: [
      {from: 1, to: 2},
      {from: 1, to: 3},
      {from: 2, to: 4},
      {from: 2, to: 5}
    ]
};

const events = {
    select: function(event) {
        var { nodes, edges } = event;
    }
}

class App extends Component {
    constructor(props) {
      super();
      this.state = { 
        data: {
          nodes: [],
          edges: []
        },
        options: {
          nodes: {
                shape: 'dot',
                size: 16
          },
          physics: {
            forceAtlas2Based: {
                gravitationalConstant: -26,
                centralGravity: 0.005,
                springLength: 230,
                springConstant: 0.18
            },
            maxVelocity: 146,
            solver: 'forceAtlas2Based',
            timestep: 0.35,
            stabilization: {iterations: 150}
          }
        },
        style: {width: "450px", height: "450px"}
      };
    }
  componentDidMount() {
    var container = document.getElementById('mynetwork');
    
    fetch('http://localhost:8080/graph/belong')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
            data: {
              nodes: responseJson.nodes,
              edges: responseJson.edges
            }
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    console.log(this.state.data)
    return (
      <div className="App">
        <Graph graph={this.state.data} options={this.state.options} style={this.state.style} />
      </div>
    );
  }
}

export default App;
