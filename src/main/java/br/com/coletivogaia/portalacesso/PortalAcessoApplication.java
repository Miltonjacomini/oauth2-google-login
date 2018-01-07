package br.com.coletivogaia.portalacesso;

import br.com.coletivogaia.portalacesso.config.SecurityConfig;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;

@SpringBootApplication
@Import({SecurityConfig.class})
public class PortalAcessoApplication {

	public static void main(String[] args) {
		SpringApplication.run(PortalAcessoApplication.class, args);
	}
}
