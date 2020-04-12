package hu.elte.QuizApp.controller;

import hu.elte.QuizApp.model.Question;
import hu.elte.QuizApp.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

import java.util.Optional;
import java.util.Random;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/question")
public class QuestionController {

    @Autowired
    private QuestionRepository questionRepository;


    //get - http://localhost:8080/question


    @GetMapping("")
    public Question getRandomQuestion(){
        Random rand = new Random();
        int randInt = rand.nextInt(questionRepository.findAll().size()) + 1;
        return questionRepository.findById(randInt);
    }

    @GetMapping("/{id}")
    public Optional<Question> getQuestion(@PathVariable Integer id){
        return questionRepository.findById(id);
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
