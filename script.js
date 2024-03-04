class MyNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <nav>
        <div>
            <h1 style="padding: 0px 0px 0px 25px;background-image: url(./assets/blue_box.svg); background-repeat: no-repeat; background-size: 15px; background-position: left;
            ">Yogesh Jadhav</h1>
            <P style="box-shadow: 1px black;">/</P>
            <p>Computer Graduate</p>

        </div>
        <ul>
            <li><a href="./index.html">About Me</a></li>
            <li><a href="./resume.html">Resume</a></li>
            <li><a href="./projects.html">Projects</a></li>
            <li><a href="./contact.html">Contact</a></li>
        </ul>
    </nav>
    `;
  }
}

customElements.define("my-navbar", MyNavbar);

class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
                <div class="left">
                    <p>© 2035 by Yogesh Jadhav.<br>
                        Powered and secured by Unity</p>
                </div>
                <div class="right">
                    <div>
                        <h1>Call</h1>
                        <p>7218208115</p>
                    </div>
                    <div>
                        <h1>Write</h1>
                        <p>yajadhav19@gmail.com</p>
                    </div>
                    <div>
                        <h1>Follow</h1>
                        <ul class="footericon">
                            <a href="https://www.linkedin.com/in/yogesh19/" target="_blank"><img class="smallicon" src="./assets/linkedin-in.svg" alt=""></a>
                            <a href="https://github.com/Unity19207" target="_blank"><img class="smallicon" src="./assets/github.svg" alt=""></a>
                            <a href="https://twitter.com/YogeshJadhav_19" target="_blank"><img class="smallicon" src="./assets/x-twitter.svg" alt=""></a>
                            <a href="https://www.instagram.com/yogesh_jadhav.19/" target="_blank"><img class="smallicon" src="./assets/instagram.svg" alt=""></a>
                        </ul>
                    </div>
                </div>
            </footer>
      `;
  }
}

customElements.define("my-footer", MyFooter);

const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});
