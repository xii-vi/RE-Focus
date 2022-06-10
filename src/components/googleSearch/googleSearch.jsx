export const GoogleSearch = () => {
    return (
        <>
            <form action="https://www.google.com/search" name="searchform">
            <input name="sitesearch" type="hidden" />
                <input
                    className="input-container-todo"
                    type="text"
                    name="q"
                    placeholder="🔍 Search With Google"
                />
            </form>
        </>
    )
}