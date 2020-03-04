package hu.elte.QuizApp.controller;

import hu.elte.QuizApp.model.Label;
import hu.elte.QuizApp.model.Question;
import hu.elte.QuizApp.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/question")
public class QuestionController {

    @Autowired
    private QuestionRepository questionRepository;

/*
    @Autowired
    private LabelRepository labelRepository;
*/

    @GetMapping("")
    public Iterable<Question> getQuestions(){
        return questionRepository.findAll();
    }

    /*@GetMapping("")
    public Iterable<Label> getLabels(){
        return labelRepository.findAll();
    }*/
}
