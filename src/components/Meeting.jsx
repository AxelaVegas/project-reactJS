export const Meeting = ({changeName}) => {

    const handelChange = (ev) => {
        changeName(ev.target.value)
    }

        return <div className='body'>
                    <div className='app-body'>
                        <p>So, meeting! What is your name</p>
                        <input type='text' onChange={handelChange}/>
                    </div>
                </div>

}
