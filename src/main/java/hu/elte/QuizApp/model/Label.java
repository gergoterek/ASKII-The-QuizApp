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
public class Label {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private String label_name;


    @OneToMany(mappedBy = "label")
    private List<Question> questions;

    @JsonIgnore
    @OneToMany(mappedBy = "label")
    private List<UserLabel> userLabels;

    //lehet státusza egy kérdésnek, ha visszadobják javításra
}
