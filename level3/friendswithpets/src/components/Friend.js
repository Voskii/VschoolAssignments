
import React from 'react'

export default function Friend(props) {
    const mapMe = Data.map(item => {
        return (
          <Cheeks
          key={item.id}
          {...item}
          />
      )
      })
}