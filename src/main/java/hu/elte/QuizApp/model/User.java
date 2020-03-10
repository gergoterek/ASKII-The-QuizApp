package hu.elte.QuizApp.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private String username;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String nickname;

    @Column(name = "total_q", columnDefinition="tinyint(1) default 0")  //default értéke 0 lesz
    private int total_q = 0;

    @Column(name = "correct_q", columnDefinition="tinyint(1) default 0")
    private int correct_q = 0;


    @OneToMany(mappedBy = "user")
    private List<UserLabel> userLabels;

    @ManyToOne
    private Role role;
}
