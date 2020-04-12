package hu.elte.QuizApp;


import hu.elte.QuizApp.controller.QuestionController;
import hu.elte.QuizApp.model.Question;
import hu.elte.QuizApp.repository.QuestionRepository;
import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Matchers;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.Spy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.Mockito.*;

import java.util.Arrays;
import java.util.List;
import java.util.Random;

//import static org.hamcrest.MatcherAssert.assertThat;

@RunWith(SpringRunner.class)
@DataJpaTest
public class QuestionRepositoryTest{

    @Spy
    QuestionController questionContSpy;

    @Mock
    QuestionRepository questionRepositoryMock;
    @Mock
    TestEntityManager entityManager;
    @Mock
    Question questionMock;
    @Mock
    Question q1;
    @Mock
    Question q2;

    List<Question> questionList = Arrays.asList(q1, q2);

    @Before
    public void setUp() throws Exception{
        doReturn(questionList)
                .when(questionRepositoryMock)
                .findAll();
        
        doReturn(questionMock)
                .when(questionRepositoryMock)
                .findById(anyInt());

        doReturn(questionMock)
                .when(questionContSpy)
                .getRandomQuestion();
    }

    @Test
    public void getRandomQuestionTest(){

        Random randomMock = Mockito.mock(Random.class);
        doReturn(1).when(randomMock).nextInt();
        Question question = questionContSpy.getRandomQuestion();
        assertThat(question, is(questionMock));
    }

    @Ignore
    @Test
    public void whenFindByName_thenReturnEmployee() {
        Question mi = new Question();
        mi.setTitle("Micsoda?");
        entityManager.persist(mi);
        entityManager.flush();
        Question found = questionRepositoryMock.findByTitle(mi.getTitle());
        assertThat(found, is(mi.getTitle()));
    }

}

