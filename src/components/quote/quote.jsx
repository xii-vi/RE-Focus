import animeQuotesDB from "../../quotes.json";
export const Quote = () => {   
        const animeQuoteGenerator = (quotesArr) => quotesArr[Math.floor(Math.random()*quotesArr.length)]
        const animeQuote = animeQuoteGenerator(animeQuotesDB.animeQuotes);
        const currentQuote = animeQuote.quote;
        const currentAuthor = animeQuote.author;
        return (
        <div>
            <q className="quote">{currentQuote} </q> 
            <p> ~ {currentAuthor} </p>
        </div>
        )
    }