import React from 'react';

import Page from '../layouts/main';

const Home = () => (
  <Page>
    <p>
      {process.env.NEXT_API_URL}
    </p>
  </Page>
)

export default Home
