import './Footer.css'

const Footer = (props) => {
    return (
        <footer>
            <img src='/imagens/fundo.png' alt=''/>
            <div className='footer-content'>
                <ul>
                    <li>
                        <img src='/imagens/fb.png' alt='' />
                    </li>
                    <li>
                        <img src='/imagens/ig.png' alt='' />
                    </li>
                    <li>
                        <img src='/imagens/tw.png' alt='' />
                    </li>
                </ul>
                <img src='/imagens/logo.png' alt='' />
                <p>Desenvolvido por Alura.</p>
            </div>
        </footer>
    )
}

export default Footer;