package com.ksa.project.controller;

import com.ksa.project.model.User;
import com.ksa.project.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.Map;

@Controller
@Slf4j
@RequestMapping("/user")
@CrossOrigin
public class UserController {
	@Autowired
	UserRepository userRepository;

	@Autowired
	HttpSession session;

	// 이메일 찾기
	@GetMapping("/findEmail")
	public String findEmail() {
		return "/user/findEmail";
	}

	@PostMapping("/findEmail")
	@ResponseBody
	public Map<String, Object> findEmailPost(@ModelAttribute User user) {
		Map<String, Object>  result = new HashMap<>();
		System.out.println(user);
		
		User dbUser = userRepository.findByNameAndPhone(user.getName(), user.getPhone());

			if (dbUser == null ) {
				result.put("msg", "가입된 정보가 없습니다.");
				result.put("code", 201);
			} else {
				result.put("msg", dbUser.getEmail());
				result.put("code", 200);
			}
			return result;
	}
	// 비밀번호 찾기
	@GetMapping("/findPassword")
	public String findPassword() {
		return "/user/findPassword";
	}

	@PostMapping("/findPassword")
	@ResponseBody
	public Map<String, Object> findPasswordPost(@ModelAttribute User user) {
		Map<String, Object>  result = new HashMap<>();
		System.out.println(user);
		
		User dbUser = userRepository.findByEmail(user.getEmail());

			if (dbUser == null ) {
				result.put("msg", "가입된 정보가 없습니다.");
				result.put("code", 201);
			} else {
				result.put("msg", dbUser.getEmail());
				result.put("code", 200);
			}
			return result;
	}

	// 아이디 체크
	@PostMapping("/emailCheck")
	@ResponseBody
	public User emailCheck(@RequestParam("email") String email, User user) {
		log.info("userEmailCheck 진입");
		log.info("전달받은 email:" + email);
		User dbUser = userRepository.findByEmail(user.getEmail());
		log.info("확인 결과:" + dbUser);
		return dbUser;
	}

	@GetMapping("/signin")
	public String signin() {
		return "user/signin";
	}

	@PostMapping("/signin")
	@ResponseBody
	public Map<String, Object> signinPost(@ModelAttribute User user) {
		System.out.println(user);
		Map<String, Object> result = new HashMap<>();
		User dbUser = userRepository.findByEmailAndPassword(
				user.getEmail(), user.getPassword());

		if (dbUser != null) {
			session.setAttribute("user_info", dbUser);
			System.out.println("로그인 성공");
			result.put("msg", "로그인 성공");
		} else {
			System.out.println("로그인 실패");
			result.put("msg", "로그인 실패");
		}
		return result;
	}

	@GetMapping("/signout")
	public String signout() {
		session.invalidate();
		return "redirect:/";
	}

	@GetMapping("/signup")
	public String signup() {
		return "user/signup";
	}

	@PostMapping("/signup")
	@ResponseBody
	public Map<String, Object> signupPost(@ModelAttribute User user) {
		System.out.println(user);
		Map<String, Object> result = new HashMap<>();
		User dbUser = userRepository.findByEmail(user.getEmail());
		log.info("확인 결과:" + dbUser);
		if (dbUser != null) {
			System.out.println("회원가입 실패");
			result.put("msg", "🤦‍♂️회원가입 실패🤦‍♂️");
			result.put("code", 201);
		} else {
			userRepository.save(user);
			System.out.println("회원가입 성공");
			result.put("msg", "👊회원가입 성공👊");
			result.put("code", 200);
		}
		return result;

	}
};
