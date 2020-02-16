import PropTypes from 'prop-types'
import React from 'react'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src="https://katjuell-site.nyc3.cdn.digitaloceanspaces.com/computer_coffee.jpg" alt="" />
          </span>
          <p>
            Languages are the tool we use to make worlds. As an academic, I wrote about that fact; as a developer, I use it. 
          </p>
          <p>
            "[Coding] is ourselves writing, before the infinite play of the world (the world as function) is traversed, intersected,
            stopped, plasticized, by some singular system [...] which reduces the pluraity of entrances, the
            opening of networks, the infinity of languages."
            - Roland Barthes, S/Z, (my addition)
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src="https://katjuell-site.nyc3.cdn.digitaloceanspaces.com/open_book.jpg" alt="" />
          </span>
          <p>You can find my technical tutorials <a href="https://www.digitalocean.com/community/users/katjuell">here</a>.</p>
          <p>I was also a core contributor to <a href="https://digitalocean.com">DigitalOcean's</a><a href="https://www.digitalocean.com/community/curriculums/kubernetes-for-full-stack-developers"> Kubernetes Curriculum</a>.</p>
          <p>I will be talking about that curriculum and my internal Kubernetes work on <a href="https://www.digitalocean.com/community">DigitalOcean Community</a> at <a href="https://events.linuxfoundation.org/kubecon-cloudnativecon-europe/">KubeCon</a> in March 2020.</p>
          <p>My public-facing code lives on <a href="https://github.com/katjuell">GitHub</a>.</p>
          <p>You can also check out my talk from <a href="https://www.writethedocs.org/conf/portland/2019/">Write the Docs 2019</a><a href="https://www.writethedocs.org/videos/portland/2019/writer-editor-teacher-kathleen-juell/"> here</a>.</p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src="https://katjuell-site.nyc3.cdn.digitaloceanspaces.com/Profile.jpg" alt="" />
          </span>
          <p>I have a Ph.D. in American Literature and work in tech as a developer and community educator.</p> 
          <p>Things I work with regularly: Kubernetes, Docker, Concourse CI, Ruby, Rails, Node.js, Git, JavaScript, Redis, PostgreSQL.</p>
          <p> Things I work on professionally: <a href="https://www.digitalocean.com/community">DigitalOcean Community</a>.</p>
          <p>If you are interested in my scholarly work, you can find a representative example <a href="https://katjuell-site.nyc3.cdn.digitaloceanspaces.com/HowardArticle.pdf">here</a>.</p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/katjuell"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/kathleen-juell/" className="icon fa-linkedin">
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/katjuell"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
