import React from 'react'
import FadeIn from 'react-fade-in'
import fetch from 'isomorphic-fetch'
import Layout from '../components/layout'
import Match from '../components/match'

const filterPlayed = m => !m.played

export default class Index extends React.Component {
  constructor (props) {
    super(props)
    this.state = { matches: props.matches }
  }

  static async getInitialProps () {
    const res = await fetch('https://soccer.now.sh/england/arsenal')
    let {matches} = await res.json()
    matches = matches.filter(filterPlayed)
    return { matches }
  }

  render () {
    return (
      <Layout>
        <FadeIn>
          {this.state.matches.map((m, i) => <Match key={i} match={m} />)}
        </FadeIn>
      </Layout>
    )
  }
}
