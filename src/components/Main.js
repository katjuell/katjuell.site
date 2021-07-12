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
            <img src="https://katjuellsite.nyc3.cdn.digitaloceanspaces.com/computer_coffee.jpg" alt="office" />
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
            <img src="https://katjuellsite.nyc3.cdn.digitaloceanspaces.com/open_book.jpg" alt="book" />
          </span>
          <p>Some places where my work as a developer lives: <a href="https://www.digitalocean.com">DigitalOcean</a>, <a href="https://www.digitalocean.com/community">DigitalOcean's Community</a>, <a href="https://hacktoberfest.digitalocean.com/">Hacktoberfest</a>.</p>
          <p>Talks that I have given include: <a href="https://www.youtube.com/watch?v=xXXM7av2W_g&list=PLkA60AVN3hh_YpK8t2ASZZJAEkz8fX2wj&index=5">DockerCon 2020</a>, <a href="https://www.youtube.com/watch?v=1sfoYf3TbQk">KubeCon EU 2020</a>,
            <a href="https://www.youtube.com/watch?v=JDrb-meCtHQ">Write the Docs 2019</a>.</p>
          <p>You can find my technical tutorials <a href="https://www.digitalocean.com/community/users/katjuell">here</a>.</p>
          <p>My public-facing code lives on <a href="https://github.com/katjuell">GitHub</a>.</p>
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
            <img src="https://katjuellsite.nyc3.cdn.digitaloceanspaces.com/Profile.jpg" alt="kathleen juell profile" />
          </span>
          <p>I have a Ph.D. in American Literature and work in tech as a full-stack developer.</p> 
          <p>Things I work with regularly: JavaScript, Node.js, Next.js, Kubernetes, Docker, Concourse CI, Ruby, Rails, Git, Redis, PostgreSQL.</p>
          <p>If you are interested in my scholarly work, you can find a representative example <a href="https://katjuellsite.nyc3.cdn.digitaloceanspaces.com/HowardArticle.pdf">here</a>.</p>
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
