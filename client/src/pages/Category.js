import React from 'react'
import { useHistory, useRouteMatch, Switch, Route} from 'react-router-dom'
import {CategoryDetail} from './index.js'
const categories = ['Programming', 'Miscellaneous', 'Dark', 'Pun']

function Category (props) {
    const {path, url} = useRouteMatch()
    const history = useHistory()

    function toDetailCategory (category) {
        history.push(`${url}/${category}`)
    }

    return (
        <>
            <h1>ini category</h1>
            <div>
                {
                    categories.map( (category, index) => {
                        return <button key={index} onClick={() => toDetailCategory(category)}>
                            {category}
                        </button>
                    })
                }
            </div>

            <Switch>
                <Route path={`${path}/:category`}>
                    <CategoryDetail/>
                </Route>
            </Switch>
        </>
    )
}

export default Category