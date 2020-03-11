package hu.elte.QuizApp.controller;

import hu.elte.QuizApp.model.Question;
import hu.elte.QuizApp.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/question")
public class QuestionController {

    @Autowired
    private QuestionRepository questionRepository;


    //get - http://localhost:8080/question
    @GetMapping("")
    public Iterable<Question> getQuestions(){
        return questionRepository.findAll();
    }

    @PostMapping("")
    public ResponseEntity<Question> createQuestion(@RequestBody Question question)
    {
        Question savedQuestion = questionRepository.save(question);
        return ResponseEntity.ok(savedQuestion);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity deleteQuestion(
            @PathVariable Integer id
    ) {
        try {
            questionRepository.deleteById(id);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

}
