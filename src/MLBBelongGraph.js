import React, { Component } from 'react';
import Graph from 'react-graph-vis';

class MLBBelongGraph extends Component {
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
        style: {width: "900px", height: "900px"}
      };
    }
  componentDidMount() {
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
      <div className="MLBBelongGraph">
        <Graph graph={this.state.data} options={this.state.options} style={this.state.style} />
      </div>
    );
  }
}

export default MLBBelongGraph;
