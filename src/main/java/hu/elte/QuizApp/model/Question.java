package hu.elte.QuizApp.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer question_ID;

    @Column(nullable = false)
    private String title;


    @OneToMany(mappedBy = "question")
    private List<Answer> answers;

    /*@JsonIgnore
    @ManyToOne
    private Label labels;*/
}