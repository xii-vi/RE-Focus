import animeQuotesDB from "../../quotes.json";
export const Quote = () => {   
        const animeQuoteGenerator = (quotesArr) => quotesArr[Math.floor(Math.random()*quotesArr.length)]
        const animeQuote = animeQuoteGenerator(animeQuotesDB.animeQuotes);
        const currentQuote = animeQuote.quote;
        const currentAuthor = animeQuote.author;
        return (
        <div className="center-flex">
            <q className="quote">{currentQuote} ~ {currentAuthor}</q> 
        </div>
        )
    }