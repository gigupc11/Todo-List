const List = ({item , removeFunction , doneFunction})=> {
    return(
        <div className='box-style' key={item.id}>
        <div>
          <h2>{item.title}</h2>
          <div>{item.comment}</div>
        </div>
        <div className='button-grp'>
          <button className='delete-btn'
          onClick={() => removeFunction(item.id)}
          >삭제하기</button>
          <button className='done-btn'
           onClick={() => doneFunction(item.id)}
          >{item.isdone ? '취소' : '완료'}</button>
        </div>
      </div>
    )
}

export default List
