import './styles.css';

export default function ProductDescription() {
    return (
        <div className="ProductDescription">
            <h2>CASTLEVANIA DRACULA X EVIL TREVOR - SUPER NINTENDO</h2>
            <p>
                No ano de 1476, Drácula investe contra a Europa com seu poderoso exército. Ele planeja vingança contra os humanos devido à morte de sua segunda esposa Lisa. O caçador de vampiros Trevor Belmont, atual portador do sagrado chicote Vampire Killer é chamado pela Igreja Católica de volta à Valáquia para por um fim à terrível onda de terror. Anos atrás, porém sua família havia sido exilada, por possuírem estranhos poderes sobrenaturais, causando medo às pessoas. Unem-se a Trevor em sua missão Sypha Belnades, sacerdotisa que possui poderes mágicos, Granty DaNasty, seu amigo e Alucard, meio-vampiro, o filho do Drácula.
                Com a ajuda de seus companheiros, eles derrotam o exército de Drácula e Trevor o destrói.
            </p>
            <div className="ProductEnd">
                <div className="ProductDetails">
                    <h3>Detalhes do Jogo:</h3>
                    <ul>
                        <li>Plataforma: Super Nintendo</li>
                        <li>Referência: SN-12345</li>
                        <li>Linguagem: Inglês</li>
                    </ul>
                </div>
                <div className="ProductBtn">
                    <p>Valor R$130,00</p>
                    <button className="AddToCartButton">
                        Adicionar ao Carrinho
                    </button>
                </div>
            </div>
        </div>
    );
}
