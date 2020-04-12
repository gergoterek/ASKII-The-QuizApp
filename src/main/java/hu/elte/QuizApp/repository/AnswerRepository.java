package hu.elte.QuizApp.repository;

import hu.elte.QuizApp.model.Answer;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AnswerRepository extends CrudRepository<Answer, Integer>  {
}
