// import React from 'react'

// class Page extends React.Component {
//   static async getInitialProps(ctx) {
//     const res = await fetch('https://cors-anywhere.herokuapp.com/http://iwsg2020.crc.nd.edu:3000/DCR/v1/credentialSchema')
//     const json = await res.json()
//     console.log(json);
//     return { stars: "hello" }
//   }

//   render() {
//     return <div>Next stars: {this.props.stars}</div>
//   }
// }

// export default Page

import Link from 'next/link'
import fetch from 'node-fetch'

function Page({ stars }) {
  return (
    <div>
      <p>Preact has {stars} ⭐</p>
      <Link href="/">
        <a>I bet Next.js has more stars (?)</a>
      </Link>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://api.github.com/repos/developit/preact')
  const json = await res.json()
  console.log(json)

  return {
    props: {
      stars: json.stargazers_count,
    },
  }
}

export default Page