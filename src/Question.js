function Question({question}) {
    return(
        <>
      <h4>{question.question}</h4>   

      <div className="options">
          <h1>fdfd</h1>
        {question.options.map((option)=>{
            return(
<button className="btn btn-option" key={option}>
             {option}
</button>
)
        })}
      </div>
        </>
    );
}

export default Question;