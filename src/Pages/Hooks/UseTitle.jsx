
import { useEffect } from "react"

const UseTitle = title => {
    useEffect(() => {
        document.title = `${title} -Nazmul Bhuyian`
    }, [title])
}

export default UseTitle;