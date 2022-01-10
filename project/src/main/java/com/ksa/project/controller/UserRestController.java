package com.ksa.project.controller;

import com.ksa.project.model.User;
import com.ksa.project.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("/user/api")
public class UserRestController {
	@Autowired
	UserRepository userRepository;

//	// 이메일 찾기(미완료)
//	@GetMapping("/findEmail")
//	public String findEmail() {
//		return "/user/findEmail";
//	}
//
//	@PostMapping("/findEmail")
//	@ResponseBody
//	public Map<String, Object> findEmailPost(@ModelAttribute User user) {
//		Map<String, Object>  result = new HashMap<>();
//		System.out.println(user);
//
//		User dbUser = userRepository.findByNameAndPhone(user.getName(), user.getPhone());
//
//			if (dbUser == null ) {
//				result.put("msg", "가입된 정보가 없습니다.");
//				result.put("code", 201);
//			} else {
//				result.put("msg", dbUser.getEmail());
//				result.put("code", 200);
//			}
//			return result;
//	}
//	// 비밀번호 찾기
//	@GetMapping("/findPassword")
//	public String findPassword() {
//		return "/user/findPassword";
//	}
//
//	@PostMapping("/findPassword")
//	@ResponseBody
//	public Map<String, Object> findPasswordPost(@ModelAttribute User user) {
//		Map<String, Object>  result = new HashMap<>();
//		System.out.println(user);
//
//		User dbUser = userRepository.findByEmail(user.getEmail());
//
//			if (dbUser == null ) {
//				result.put("msg", "가입된 정보가 없습니다.");
//				result.put("code", 201);
//			} else {
//				result.put("msg", dbUser.getEmail());
//				result.put("code", 200);
//			}
//			return result;
//	}
//
//	// 아이디 체크
//	@PostMapping("/emailCheck")
//	@ResponseBody
//	public User emailCheck(@RequestParam("email") String email, User user) {
//		log.info("userEmailCheck 진입");
//		log.info("전달받은 email:" + email);
//		User dbUser = userRepository.findByEmail(user.getEmail());
//		log.info("확인 결과:" + dbUser);
//		return dbUser;
//	}
//
//	@GetMapping("/signin")
//	public String signin() {
//		return "user/signin";
//	}

	//로그인 기능 구현
	@PostMapping("/signin")
	public Map<String, Object> signinPost(String email, String password) {
		Map<String, Object> map = new HashMap<>();
		User dbUser = userRepository.findByEmailAndPassword(
				email, password);

		if (dbUser != null) {
			System.out.println("로그인 성공");
			map.put("user",dbUser);
			map.put("code",200);
			map.put("msg", dbUser.getName()+"님❤\n 안녕하세요!️");
		} else {
			map.put("code",400);
			map.put("msg", "잘못된 정보 입력, 로그인 실패");
		}
		return map;
	}

	//	@GetMapping("/signout")
	//	public String signout() {
	//		return "redirect:/";
	//	}
	//
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

	@PostMapping("/quitUser")
	public Map<String,Object> quitUser(Long userId){
		Map<String, Object> map = new HashMap<>();
		User findUser = userRepository.findById(userId).get();
		userRepository.delete(findUser);
		if (userRepository.findById(userId).get()!=null){
			map.put("msg","회원정보가 삭제되었습니다.");
			map.put("code",200);
		}else{
			map.put("msg","회원 탈퇴 실패");
			map.put("code",400);
		}
		return map;
	}
};
