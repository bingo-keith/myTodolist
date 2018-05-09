import React from 'react';
console.log('3. Link.js start')
const Link = ({ active, children, onClick }) => {
    return (
        <div className="todo-tab_item">
            <a href = "#" style={{ color: active? '#f01414' : '#4d555d' }}
                onClick = {
                    e => {
                        e.preventDefault()
                        onClick()
                    }
                }>
                {children}
            </a>
        </div>
    )
}
console.log('3. Link.js end')
export default Link;