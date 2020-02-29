package hu.elte.QuizApp.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User_Label {

    @JsonIgnore
    @ManyToOne
    private Label labels;

    @JsonIgnore
    @ManyToOne
    private User users;
}