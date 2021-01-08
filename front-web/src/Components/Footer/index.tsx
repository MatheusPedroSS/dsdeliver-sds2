import './styles.css';
import {ReactComponent as YouTube} from './Youtube.svg'
import {ReactComponent as Linkedin} from './Linkedin.svg'
import {ReactComponent as Instagram} from './Instagram.svg'

function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://www.youtube.com/channel/UC3twHmWQwtqEO7u-gB_2f7g" target="_new">
                    <YouTube />
                </a>
                <a href="https://www.linkedin.com/in/matheus-pedro-256384136/" target="_new">
                    <Linkedin />
                </a>
                <a href="https://www.instagram.com/matheus_cz/" target="_new">
                    <Instagram />
                </a>
            </div>
        </footer>
    )
}

export default Footer;