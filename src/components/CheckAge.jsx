


export const CheckAge = ({age}) => {

    if (age > 17) {
        return  <div>
                    <p>Fine! Get access to all content!</p>
                </div>
    } else return   <div>
                        <p>Сontent is limited!</p>
                    </div>

}