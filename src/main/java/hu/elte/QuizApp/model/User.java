package hu.elte.QuizApp.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

/*@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor*/
public class User {
/*
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer user_ID;

    @Column(nullable = false)
    private String username;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String nickname;

    @Column(nullable = false)
    private Integer role_ID;


    @OneToMany(mappedBy = "user")
    private List<User_Label> userLabels;


    @ManyToOne
    private Role roles;*/
}
