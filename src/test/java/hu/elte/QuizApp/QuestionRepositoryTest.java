package hu.elte.QuizApp;


import hu.elte.QuizApp.model.Question;
import hu.elte.QuizApp.repository.QuestionRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

import static org.assertj.core.api.Assertions.assertThat;

//import static org.hamcrest.MatcherAssert.assertThat;

@RunWith(SpringRunner.class)
@DataJpaTest
public class QuestionRepositoryTest{

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private QuestionRepository questionRepository;


    @Test
    public void whenFindByName_thenReturnEmployee() {
        Question mi = new Question();
        mi.setTitle("Micsoda?");
        entityManager.persist(mi);
        entityManager.flush();
        Question found = questionRepository.findByTitle(mi.getTitle());
        assertThat(found.getTitle()).isEqualTo(mi.getTitle());
    }

}

