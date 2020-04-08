package hu.elte.QuizApp.repository;

import hu.elte.QuizApp.model.Label;
import hu.elte.QuizApp.model.Question;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuestionRepository extends CrudRepository<Question, Integer> {
  //  List<Question> findAll();
         public Question findByTitle(String title);
}


