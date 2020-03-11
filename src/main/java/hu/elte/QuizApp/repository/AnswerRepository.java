package hu.elte.QuizApp.repository;

import hu.elte.QuizApp.model.Answer;
import org.springframework.data.repository.CrudRepository;

public interface AnswerRepository extends CrudRepository<Answer, Integer>  {
}
