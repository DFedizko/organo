import './Rodape.css';

const Rodape = () => {
    return (
        <footer>
            <ul>
                <li>
                    <a href='/'>
                        <img src='./imagens/fb.png' alt='Facebook'/>
                    </a>
                </li>
                <li>
                    <a href='/'>
                        <img src='./imagens/tw.png' alt='Twitter'/>
                    </a>
                </li>
                <li>
                    <a href='/'>
                        <img src='./imagens/ig.png' alt='Instagram'/>
                    </a>
                </li>
            </ul>

            <img src='./imagens/logo.png' alt='Logo do Organo' />

            <p>Desenvolvido por Pedro Fedizko.</p>
        </footer>
    );
}

export default Rodape;