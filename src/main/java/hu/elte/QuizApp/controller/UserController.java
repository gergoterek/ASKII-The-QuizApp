package hu.elte.QuizApp.controller;

import hu.elte.QuizApp.model.User;
import hu.elte.QuizApp.repository.UserRepository;
import hu.elte.QuizApp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = "*",  allowedHeaders = "*")
@RestController
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("/registration")
    public void register(@RequestBody User user) {
        userService.register(user);
    }

    @GetMapping("/home")
    public ResponseEntity<User> login() {
        return ResponseEntity.ok(userService.getActUser());
    }
}
