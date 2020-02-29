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
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer role_ID;

    @Column(nullable = false)
    private String role_name;

    @OneToMany(mappedBy = "role")
    private List<User> users;
}
