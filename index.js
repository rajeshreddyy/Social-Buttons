const Button = props => {
  const {btnText, className} = props
  return <button className={className}>{btnText}</button>
}

const element = (
  //  Write your code here.
  <div className='bg-container'>
    <h1> Social Buttons</h1>
    <div>
      <Button btnText='Like' className='like-btn' />
      <Button btnText='Comment' className='comment-btn' />
      <Button btnText='Share' className='share-btn' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
