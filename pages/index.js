import React from 'react'
import FadeIn from 'react-fade-in'
import fetch from 'isomorphic-fetch'
import Layout from '../components/layout'
import Match from '../components/match'

const filterPlayed = m => !m.played

export default class Index extends React.Component {
  constructor (props) {
    super(props)
    this.state = { matches: [] }
  }

  componentDidMount () {
    fetch('https://soccer.now.sh/england/arsenal').then(res => {
      res.json().then(({ matches }) => {
        matches = matches.filter(filterPlayed)
        this.setState({ matches })
      })
    })
  }

  render () {
    if (this.state.matches.length === 0) {
      return (
        <Layout>
          <div style={{marginTop: '20px'}}>Loading...</div>
        </Layout>
      )
    }

    return (
      <Layout>
        <FadeIn>
          {this.state.matches.map((m, i) => <Match key={i} match={m} />)}
        </FadeIn>
      </Layout>
    )
  }
}
